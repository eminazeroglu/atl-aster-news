import useForm from "../../../hooks/useForm";
import { serviceNewsPostComments } from "../../../services/news.service";
import Button from "../../ui/button";

function NewsCommentForm({id, onSuccess}) {

    const { values, setField, handleSubmit, resetForm, loading } = useForm({
        initialValue: {
            body: '',
        },
        onSubmit: async () => {
            const res = await serviceNewsPostComments(id, values);
            if (res) {
                resetForm();
                onSuccess()
            }
        }
    });

    return (
        <form onSubmit={handleSubmit}>
            <h4 className="font-bold mb-[10px] text-[17px] dark:!text-gray-200 text-amberBlack">Add your comment</h4>
            <textarea value={values.body} onChange={e => setField('body', e.target.value)} placeholder="Enter your comment here.." className="bg-[#ECF5F8] dark:bg-gray-700 placeholder:text-[#a7b9c4] px-[18px] focus:outline-none py-[12px] rounded-theme w-full" name="" id="" rows="5"></textarea>
            <div className="mt-[10px]">
                <Button property="sky-blue" type="submit" size="lg" rounded={true}>
                    Post Comment
                </Button>
            </div>
        </form>
    );
}

export default NewsCommentForm;