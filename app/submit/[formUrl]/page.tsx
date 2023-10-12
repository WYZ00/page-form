import { GetFormContentByUrl } from "@/actions/form";
import { FormElementIntance } from "@/components/FormElements";
import FormSubmitComponent from "@/components/FormSubmitComponent";

async function SubmitPage({
  params,
}: {
  params: {
    formUrl: string;
  };
}) {
  const form = await GetFormContentByUrl(params.formUrl);

  if (!form) {
    throw new Error("Form not found");
  }

  const formContent = JSON.parse(form.content) as FormElementIntance[];

  return <FormSubmitComponent formUrl={params.formUrl} content={formContent} />;
}
export default SubmitPage;
