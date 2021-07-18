import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>ああああ</li>
            <button>完了</button>
            <button>追加</button>
          </div>
          <div>
            <li>いいいい</li>
            <button>完了</button>
            <button>追加</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <div>
          <ul>
            <li>ううううう</li>
            <button>戻す</button>
          </ul>
        </div>
      </div>
    </>
  );
};
