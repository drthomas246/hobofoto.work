import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";

// バリデーション設定
const schema = zod.object({
  name: zod.string().min(1, { message: "必須項目です" }),
  email: zod
    .string()
    .email({ message: "有効なメールアドレスを入力してください" }),
  message: zod.string().min(1, { message: "必須項目です" }),
});

// フォームの入力内容の型
type FormData = {
  name: string;
  email: string;
  message: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    //送信するデータをsessionStorageに保存
    sessionStorage.setItem("contactData", JSON.stringify(data));
    window.location.href = "/aboutme/confirm";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="part">
        <label htmlFor="name" className="japanese2">
          お名前
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          placeholder="山原 喜寛"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>
      <div className="part">
        <label htmlFor="email" className="japanese2">
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="sampla@abc.com"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div className="part">
        <label htmlFor="message" className="japanese2">
          ご用件
        </label>
        <textarea rows={10} id="message" {...register("message")}></textarea>
        {errors.message && <p className="error">{errors.message.message}</p>}
      </div>
      <button type="submit" className="japanese2">
        確認画面へ
      </button>
    </form>
  );
};

export default Form;
