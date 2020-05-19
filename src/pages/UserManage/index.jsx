import { Table, Card, Form, Input, Icon } from 'antd';
import React, { Component } from 'react';
import request from '@/utils/request';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';

class UserManage extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getUserList();
  }

  getUserList = () => {
    return request('/api/', {
      method: 'GET',
      data: {},
    }).then(res => {
      this.setState({
        data: res.data,
      })
    })
  }

  rendercolumns = () => {
    return [
      {
        title: '姓名',
        dataIndex: 'last_name',
        key: 'last_name',
      },
      {
        title: '年终奖',
        dataIndex: 'commission_pct',
        key: 'commission_pct',
      },
      {
        title: '部门',
        dataIndex: 'department_id',
        key: 'department_id',
      },
      // email
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: '员工id',
        dataIndex: 'employee_id',
        key: 'employee_id',
      },
      {
        title: '岗位',
        dataIndex: 'job_id',
        key: 'job_id',
      },
      {
        title: '入职日期',
        dataIndex: 'hiredate',
        key: 'hiredate',
      },
      {
        title: '上级',
        dataIndex: 'manager_id',
        key: 'manager_id',
      },
      {
        title: '电话',
        dataIndex: 'phone_number',
        key: 'phone_number',
      }, // salary
      {
        title: '工资',
        dataIndex: 'salary',
        key: 'salary',
      },
    ]
  }

  render() {
    const column = this.rendercolumns();
    const { data } = this.state;
    const { form: { getFieldDecorator } } = this.props;
    return (
      <PageHeaderWrapper
        footer={null}
      >
        <Card className={styles.container}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
          </Form>
        </Card>
        <Table columns={column} dataSource={data} />
      </PageHeaderWrapper>
    )
  }
}

const FormWrraper = Form.create()(UserManage);

export default FormWrraper;