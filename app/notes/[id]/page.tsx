type Props = {
  params: Promise<{ id: string }>;
};

const NoteItem = async ({ params }: Props) => {
  const res = await params;
  console.log(res);

  return <>NoteItem</>;
};

export default NoteItem;
