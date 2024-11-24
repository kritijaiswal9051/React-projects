function Popup({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Popup"} className="popup">
      <div className="popup-content">
        <div className="header">
          <span onClick={onClose} className="close-popup-icon">
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>this is body</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
}

export default Popup;
