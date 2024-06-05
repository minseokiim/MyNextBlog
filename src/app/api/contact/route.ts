import * as yup from "yup";
import { sendEmail } from "@/api/email";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  console.log("AUTH_USER:", process.env.AUTH_USER);
  console.log("AUTH_PASS:", process.env.AUTH_PASS);

  //이메일 데이터 유효성 검사
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "메일 보내기 실패" }), {
      status: 400,
    });
  }

  const { from, subject, message } = body;

  //노드메일러 통해 메일 보내rl
  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: "메일 보내기 성공" }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.error(error);
      return new Response(JSON.stringify({ message: "메일 보내기 실패" }), {
        status: 500,
      });
    });
}
