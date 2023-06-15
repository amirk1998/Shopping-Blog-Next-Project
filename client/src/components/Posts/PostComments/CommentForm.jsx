const CommentForm = ({ comment, setComment }) => {
  return (
    <form>
      <textarea
        id='base_comment'
        rows='4'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className='my-4 block w-full resize-none rounded-lg  border-none bg-gray-200 p-4 text-base text-slate-800 shadow-sm outline-none ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder='نظرت رو برام بنویس'
      ></textarea>
      <button className='mx-auto mt-6 w-full rounded-xl bg-blue-600 px-3 py-4 text-white hover:bg-blue-700 hover:shadow-lg sm:w-56 md:text-lg'>
        ارسال نظر
      </button>
    </form>
  );
};

export default CommentForm;
