import CommentsListItemUI from "../listItem/commentsListItem.presenter";

export default function CommentsListUI(props) {
  return (
    <>
      {props.data?.fetchBoardComments.map((comment) => (
        <CommentsListItemUI
          key={comment._id}
          comment={comment}
          desc={props.desc}
          onClickDeleteComment={props.onClickDeleteComment}
          isModalVisible={props.isModalVisible}
          showModal={props.showModal}
          handleOk={props.handleOk}
          handleCancel={props.handleCancel}
          onChangePassword={props.onChangePassword}
          isEdit={props.isEdit}
        />
      ))}
    </>
  );
}
