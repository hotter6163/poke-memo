import { InferGetStaticPropsType, NextPage } from 'next';
import { getUsers } from 'store';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const users = await getUsers();
  return {
    props: {
      users,
    },
  };
};

const Page: NextPage<Props> = ({ users }) => {
  return (
    <div>
      <h1>Web</h1>
      {users.map((user) => (
        <p>{`${user.id}: ${user.name}(${user.age})`}</p>
      ))}
    </div>
  );
};

export default Page;
