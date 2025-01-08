import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// フォームの入力内容の型定義
type FormData = {
  name: string;
  email: string;
  message: string;
};

const Confirm = () => {
  const { register, handleSubmit } = useForm<FormData>({});
  const [contactData, setContactData] = useState<Partial<FormData>>({});

  useEffect(() => {
    // sessionStorageからデータを取得
    const sessionData = sessionStorage.getItem("contactData");
    if (!sessionData) {
      // データがない場合はフォームに戻る
      window.location.href = "/aboutme/contact";
    } else {
      setContactData(JSON.parse(sessionData));
    }
  }, []);

  return (
    <form
      action="https://ssgform.com/s/ZuIwL24RRTZd"
      method="post"
      className="confirm"
    >
      <div>
        <label className="japanese2">名前</label>
        <p className="japanese2">{contactData.name}</p>
        <input type="hidden" id="name" name="name" value={contactData.name} />
      </div>
      <div>
        <label className="japanese2">メールアドレス</label>
        <p className="japanese2">{contactData.email}</p>
        <input
          type="hidden"
          id="email"
          name="email"
          value={contactData.email}
        />
      </div>
      <div>
        <label className="japanese2">ご用件</label>
        <p className="contact-message japanese2">{contactData.message}</p>
        <textarea
          rows={10}
          readOnly
          id="message"
          className="contact-message-textarea"
          name="message"
          value={contactData.message}
        />
      </div>
      <div
        className="g-recaptcha"
        data-sitekey="6LdUZrEqAAAAAJdj67rGcySGijwxpThnMHoh-TEj"
      ></div>
      <button type="submit" className="japanese2">
        送信する
      </button>
      <button
        type="button"
        onClick={() => history.back()}
        className="japanese2"
      >
        入力画面に戻る
      </button>
    </form>
  );
};

export default Confirm;
