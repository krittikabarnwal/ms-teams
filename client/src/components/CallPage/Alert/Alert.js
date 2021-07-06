import "./Alert.scss";

const Alert = ({ messageAlert }) => {
  return (
    <div className="message-alert-popup">
      <div className="alert-header">
        <i class="fas fa-comment-alt"></i>
        <div>{messageAlert.payload.user}</div>
      </div>
      <p className="alert-msg">{messageAlert.payload.msg}</p>
    </div>
  );
};

export default Alert;
