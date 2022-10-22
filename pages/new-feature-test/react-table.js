import React from "react";
import {Box} from "@chakra-ui/react";
import ReactTableComponent from "../../components/Table/ReactTableComponent";

const TweetsData = [
  {
    username: 'metahitesh85',
    time: '2022-02-07 17:37:11.052824',
    tweet: 'Just created a Portfolio website builder using #ReactJS  and #strapi😃.',
    link: 'https://twitter.com/MetaHitesh85/status/1454051030488936449?s=20&t=a-4kkLm-eEkWY96L23FwFA',
    multilabel: ['emergency', 'help', 'medical', 'rescue'],
  },
  {
    username: 'omsurve',
    time: '2022-02-07 17:37:11.052824',
    tweet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at commodi debitis eius, molestiae nam quia tempore. Accusantium cum doloremque ipsam ipsum maiores necessitatibus neque ratione unde? Consectetur, labore, nesciunt?',
    link: 'https://twitter.com/MetaHitesh85/status/1454051030488936449?s=20&t=a-4kkLm',
    multilabel: ['emergency', 'help', 'medical', 'rescue'],
  },
  {
    username: 'metahitesh85',
    time: '2022-02-07 17:37:11.052824',
    tweet: 'Just created a Portfolio website builder using #ReactJS  and #strapi😃.',
    link: 'https://twitter.com/MetaHitesh85/status/1454051030488936449?s=20&t=a-4kkLm-eEkWY96L23FwFA',
    multilabel: ['emergency', 'help', 'medical', 'rescue'],
  },
  {
    username: 'metahitesh85',
    time: '2022-02-07 17:37:11.052824',
    tweet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at commodi debitis eius, molestiae nam quia tempore. Accusantium cum doloremque ipsam ipsum maiores necessitatibus neque ratione unde? Consectetur, labore, nesciunt?',
    link: 'https://twitter.com/MetaHitesh85/status/1454051030488936449?s=20&t=a-4kkLm-eEkWY96L23FwFA',
    multilabel: ['emergency', 'help', 'medical', 'rescue'],
  },
  {
    username: 'metahitesh85',
    time: '2022-02-08 17:37:11.052824',
    tweet: 'Just created a Portfolio website builder using #ReactJS  and #strapi😃.',
    link: 'https://twitter.com/MetaHitesh85/status/1454051030488936449?s=20&t=a-4kkLm-eEkWY96L23FwFA',
    multilabel: ['emergency', 'help', 'medical', 'rescue'],
  },
  {
    username: 'omsurve',
    time: '2022-02-04 17:37:11.052824',
    tweet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at commodi debitis eius, molestiae nam quia tempore. Accusantium cum doloremque ipsam ipsum maiores necessitatibus neque ratione unde? Consectetur, labore, nesciunt?',
    link: 'https://twitter.com/MetaHitesh85/status/1454051030488936449?s=20&t=a-4kkLm',
    multilabel: ['emergency', 'help', 'medical', 'rescue'],
  },
  {
    username: 'metahitesh85',
    time: '2022-02-11 17:37:11.052824',
    tweet: 'Just created a Portfolio website builder using #ReactJS  and #strapi😃.',
    link: 'https://twitter.com/MetaHitesh85/status/1454051030488936449?s=20&t=a-4kkLm-eEkWY96L23FwFA',
    multilabel: ['emergency', 'help', 'medical', 'rescue'],
  },
  {
    username: 'metahitesh85',
    time: '2022-02-15 17:37:11.052824',
    tweet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at commodi debitis eius, molestiae nam quia tempore. Accusantium cum doloremque ipsam ipsum maiores necessitatibus neque ratione unde? Consectetur, labore, nesciunt?',
    link: 'https://twitter.com/MetaHitesh85/status/1454051030488936449?s=20&t=a-4kkLm-eEkWY96L23FwFA',
    multilabel: ['emergency', 'help', 'medical', 'rescue'],
  },
]

function TableComponent() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'User Details',
        columns: [
          {
            Header: 'Username',
            accessor: 'username',
          },
        ],
      },
      {
        Header: 'Tweet Details',
        columns: [
          {
            Header: 'Tweet',
            accessor: 'tweet',
          },
          {
            Header: 'Multi-Label',
            accessor: 'multilabel',
            filter: 'includes',
          },
          {
            Header: 'Date',
            accessor: 'time',
          },
          {
            Header: 'Link',
            accessor: 'link',
          },
        ],
      },
    ], [])

  return (<ReactTableComponent columns={columns} data={TweetsData}/>)
}

const ReactTable = () => {
  return (
    <Box maxW={'container.xl'} mx={'auto'} my={12}>
      <TableComponent/>
    </Box>
  );
};

export default ReactTable;