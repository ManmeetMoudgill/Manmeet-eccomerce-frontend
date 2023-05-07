import { useRouter } from "next/router";

const MacCategoryPage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  return <div>MacCategoryPage {slug} </div>;
};

export default MacCategoryPage;
