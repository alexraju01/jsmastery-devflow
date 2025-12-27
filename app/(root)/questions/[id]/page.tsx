const QuestionDetails = async ({ params }: RouteParama) => {
  const { id } = await params;

  return <div>Question Page: {id}</div>;
};

export default QuestionDetails;
