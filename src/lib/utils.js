import { z } from "zod";

export const authFormSchema = (type)=>z.object({
     // sign up
     firstName: type === 'sign-in' ? z.string().optional() : z.string().min(3, { message: "Họ là bắt buộc!" })
  ,
  lastName: type === 'sign-in' ? z.string().optional() : z.string().min(3, {message: "Tên là bắt buộc!"}),

  // both
  email: z.string().nonempty({message: "Email là bắt buộc!"}).email({message: "Email không hợp lệ!"}),
  password: z.string().min(8, {message: "Mật khẩu phải có ít nhất 8 ký tự!"}),
})