import * as yup from "yup";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().email().required(),
  message: yup.string().email().required(),
});

export async function POST(req: Request) {
  //이메일 데이터 유효성 검사
  if (!bodySchema.isValidSync(req.body)) {
    return new Response("유효하지 않은 포맷", { status: 400 });
  }

  const { from, subject, message } = req.body;
  //여기서 노드메일러 통해 메일 보내면 됨.
}
