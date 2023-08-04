interface IParams {
 conversationId: string;
}

const ConversationId = async ({ params }: { params: IParams }) => {
 return <div>conv id</div>;
};
export default ConversationId;
