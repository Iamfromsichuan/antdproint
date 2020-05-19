import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Alert, Anchor, Input } from 'antd';
import styles from './Welcome.less';

const { Link } = Anchor;

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default () => (
  <PageHeaderWrapper>
    <Card>
      <Alert
        message="umi ui 现已发布，点击右下角 umi 图标即可使用"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
      <Typography.Text strong>
        <a target="_blank" rel="noopener noreferrer" href="https://pro.ant.design/docs/block">
          基于 block 开发，快速构建标准页面
        </a>
      </Typography.Text>
      <CodePreview> npm run ui</CodePreview>
      <Typography.Text
        strong
        style={{
          marginBottom: 12,
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pro.ant.design/docs/available-script#npm-run-fetchblocks"
        >
          获取全部区块
        </a>
      </Typography.Text>
      <CodePreview> npm run fetch:blocks</CodePreview>
    </Card>
    <p
      style={{
        textAlign: 'center',
        marginTop: 24,
      }}
    >
      Want to add more pages? Please refer to{' '}
      <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
        use block
      </a>
      。
    </p>
    <div>
      <div>
        <Input placeholder="Basic usage" />
        <Anchor>
          <Link href="#demo1" title="Basic demo" />
          <Link href="#demo2" title="Static demo" />
          <Link href="#demo3" title="Basic demo with Target" />
          <Link href="#demo4" title="API">demo4</Link>
        </Anchor>
        <div className={styles.container}>
          <div id="demo1" className={styles.demo}>
            {/* a */}
          </div>
          <div id="demo2" className={styles.demo}>
            {/* a */}
          </div>
          <div id="demo3" className={styles.demo}>
            {/* a */}
          </div>
          <div id="demo4" className={styles.demo}>
            {/* a */}
          </div>
          <div id="demo5" className={styles.demo}>
            {/* a */}
          </div>
        </div>
      </div>
    </div>
  </PageHeaderWrapper>
);
