import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Ajusta o caminho conforme a tua pasta

const handleSubmit = async (e) => {
  e.preventDefault(); // Impede a página de recarregar
  try {
    await addDoc(collection(db, "matriculas"), {
      nome: nomeResponsavel,
      telefone: telefone,
      email: email,
      curso: cursoSelecionado,
      data: new Date()
    });
    console.log("Dados enviados com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar:", error);
  }
};
