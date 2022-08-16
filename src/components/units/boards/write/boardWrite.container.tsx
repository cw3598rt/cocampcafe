import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import BoardWriteUI from "./boardWrite.presenter";
import { CREATE_BOARD, UPLOAD_FILE, UPDATE_BOARD } from "./boardWrite.query";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const schema = yup.object({
  writer: yup.string().required("작성자를 입력해 주세요."),
  password: yup.string().required("비밀번호를 입력해 주세요."),
  title: yup.string().required("제목을 입력해 주세요."),
  contents: yup.string().required("내용을 입력해 주세요."),
});

export default function BoardWrite(props) {
  const [createBoardgql] = useMutation(CREATE_BOARD);
  const [uploadFilegql] = useMutation(UPLOAD_FILE);
  const [updateBoardgql] = useMutation(UPDATE_BOARD);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [imgUrl, setImgUrl] = useState(["", "", ""]);
  const [imgIndex, setImgIndex] = useState("");
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const youtubeInputRef = useRef();
  const router = useRouter();
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const handleComplete = (data) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
      const images = resultonFileUpload.map((el) =>
        el ? el.data.uploadFile.url : ""
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
  const onSubmitUpdateBoard = async (data) => {
    const updateBoardInput = {
      boardAddress: {
        zipcode: "",
        address: "",
        addressDetail: "",
      },
    };
    if (data.title) updateBoardInput.title = data.title;
    if (data.contents) updateBoardInput.contents = data.contents;
    if (data.youtubeUrl) updateBoardInput.youtubeUrl = data.youtubeUrl;
    if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
    if (address) updateBoardInput.boardAddress.address = address;
    if (data.addressDetail)
      updateBoardInput.boardAddress.addressDetail = data.addressDetail;

    try {
      const resultonFileUpload = await Promise.all(
        files.map((file) => file && uploadFilegql({ variables: { file } }))
      );
      const images = resultonFileUpload.map((el) =>
        el ? el.data.uploadFile.url : ""
      );
      if (images) updateBoardInput.images = images;
      const result = await updateBoardgql({
        variables: {
          updateBoardInput,
          password: data.password,
          boardId: router.query._id,
        },
      });
      router.push(`/boards/detail/${result.data.updateBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  useEffect(() => {
    if (props.defaultData?.fetchBoard.images) {
      console.log(props.defaultData?.fetchBoard.images);
      setImgUrl(props.defaultData?.fetchBoard.images);
    }
    reset({
      writer: props.defaultData?.fetchBoard.writer,
      title: props.defaultData?.fetchBoard.title,
      contents: props.defaultData?.fetchBoard.contents,
    });
  }, [props.defaultData]);
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
      setFiles={setFiles}
      setImgIndex={setImgIndex}
      imgIndex={imgIndex}
      isModalVisible={isModalVisible}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      zipcode={zipcode}
      address={address}
      isEdit={props.isEdit}
      defaultData={props.defaultData}
      onSubmitUpdateBoard={onSubmitUpdateBoard}
    />
  );
}
