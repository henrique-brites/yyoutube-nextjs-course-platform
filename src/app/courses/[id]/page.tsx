import { Metadata } from "next";

interface Props {
  params: { id: string }
} 

export async function generateMetadata({ params }: Props): Promise<Metadata>  {
  // vai na api do youtube e busca os dados necessários 

  return {
    title: params.id,
    description: params.id,
  };
};

export default function PageCoursesDetail({ params }: Props) {

  return (
    <main className="mt-8 flex justify-center">
      Detalhes do curso {params.id}
    </main>
  );
}
