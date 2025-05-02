export default function newsDetails({params}) {
    const slug = params.slug;
    const id = params.id;

  return (
        <h1> {slug} </h1>
  );
}

