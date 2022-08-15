import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import BoardWriteUI from "./boardWrite.presenter";
import { CREATE_BOARD, UPLOAD_FILE } from "./boardWrite.query";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const schema = yup.object({
  writer: yup.string().required("작성자를 입력해 주세요."),
  password: yup.string().required("비밀번호를 입력해 주세요."),
  title: yup.string().required("제목을 입력해 주세요."),
  contents: yup.string().required("내용을 입력해 주세요."),
});

export default function BoardWrite() {
  const [createBoardgql] = useMutation(CREATE_BOARD);
  const [uploadFilegql] = useMutation(UPLOAD_FILE);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [imgUrl, setImgUrl] = useState(["", "", ""]);
  const [imgIndex, setImgIndex] = useState("");
  const [files, setFile] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);
  const youtubeInputRef = useRef();
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickMoveBackToList = () => {
    router.push("/boards/list");
  };
  const onChangeYoutubeUrl = (event) => {
    setYoutubeUrl(event.target.value);
  };
  const onSubmitCreateBoard = async (data) => {
    try {
      const resultonFileUpload = await Promise.all(
        files.map((file) => file && uploadFilegql({ variables: { file } }))
      );
      const images = resultonFileUpload.map(
        (el) => el || el.data.uploadFile.url
      );

      const result = await createBoardgql({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail: data.addressDetail,
            },
            images,
          },
        },
      });
      router.push(`/boards/detail/${result.data.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <BoardWriteUI
      formState={formState}
      handleSubmit={handleSubmit}
      register={register}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      youtubeUrl={youtubeUrl}
      youtubeInputRef={youtubeInputRef}
      onSubmitCreateBoard={onSubmitCreateBoard}
      onClickMoveBackToList={onClickMoveBackToList}
      imgUrl={imgUrl}
      setImgUrl={setImgUrl}
      files={files}
      setFile={setFile}
      setImgIndex={setImgIndex}
      imgIndex={imgIndex}
    />
  );
}
