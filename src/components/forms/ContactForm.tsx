"use client"
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { FaunaError, fql } from 'fauna';
import client from '@/utils/fauna';

interface FormData {
   name: string;
   email: string;
   message: string;

}

const schema = yup
   .object({
      name: yup.string().required("Preencha o campo nome").label("Name"),
      email: yup.string().required("Preencha o campo Email").email().label("Email"),
      message: yup.string().required("Preencha o campo Mensagem").label("Message"),

   })
   .required();

const ContactForm = () => {
//
   async function newContact(data:FormData) {
      const clientdb = Object.create(client)

      
      try {
         // Compose a query
         console.log("criando contato")

         const collectionName = "contact";
         const query = fql`
         contact.create({
         name: ${data.name},
         email: ${data.email},
         message: ${data.message}
         })`;
       
         // Run the query
         const response = await client.query(query)
         return response
       
       } catch (error) {
         if (error instanceof FaunaError) {
            console.log("Errrowwww")
           console.log(error);
         }
       } finally {
         // Clean up any remaining resources
         clientdb.close();
       }
   }

//
   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const onSubmit = async(data: FormData) => {
      console.log(data);
      const resul =newContact(data)
      console.log(resul.catch(e=>console.log(e)))
      toast.success('Comentário enviado com sucesso', { position: 'top-center' });
      reset();
 
   };

   return (
      <form className="contact-form-wrap" onSubmit={handleSubmit(onSubmit)} id="contact-form">
         <div className="consulting-contact-form mx-4">
            <h3 className="mb-3">Consultoria Grátis</h3>
            <div className="single-input-inner style-bg">
               <input type="text" {...register("name")} placeholder="Nome Completo" />
               <p className="form_error">{errors.name?.message}</p>
            </div>
            <div className="single-input-inner style-bg">
               <input type="text" {...register("email")} placeholder="Email" />
               <p className="form_error">{errors.email?.message}</p>
            </div>
            <div className="single-input-inner style-bg">
               <textarea {...register("message")} placeholder="Mensagem"></textarea>
               <p className="form_error">{errors.message?.message}</p>
            </div>
            <div className="btn-wrap pb-3">
               <button type='submit' className="it-btn btn-base">Enviar Agora</button>
            </div>
            <p className="form-messege mb-0 mt-20 text-center"></p>
         </div>
      </form>
   );
}

export default ContactForm;
