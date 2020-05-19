import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

export default class Base extends Component {
  componentDidMount() {
    console.log('had componnentdidmount')
  }

  renderContent() {
    const { children } = this.props;
    return (
      <PageHeaderWrapper

      >
        {
          children
        }
      </PageHeaderWrapper>
    )
  }
}