import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { UserOutlined } from '@ant-design/icons'
import { Menu, Dropdown, Avatar, Badge } from 'antd'
import bell from '../bell.svg'
import styles from './style.module.scss'

const mapStateToProps = ({ user }) => ({ user })

const ProfileMenu = ({ dispatch, user }) => {
  const [count, setCount] = useState(7)
  const history = useHistory()

  const logout = e => {
    e.preventDefault()
    dispatch({
      type: 'user/LOGOUT',
    })
  }

  const addCount = () => {
    setCount(count + 1)
  }

  const menu = (
    <Menu selectable={false}>
      <Menu.Item>
        <div className={styles.wraper}>
          <div
            className="d-flex align-items-center justify-content-between "
            style={{ padding: '10px', borderBottom: '1px solid lightgray' }}
          >
            <div className="d-flex align-items-center">
              <div className={styles.circle} />
              <div>
                <h4>Name</h4>
                <p>Ready to interview</p>
              </div>
            </div>
            <div>
              <h5 style={{ color: '#279abf' }}>Change</h5>
            </div>
          </div>

          <div
            style={{
              padding: '10px',
              borderBottom: '1px solid lightgray',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Personal</span>
            <h5>Edit profile</h5>
            <h5>Settings</h5>
            <h5>Notificatio Settings</h5>
          </div>

          <div
            style={{
              padding: '10px',
              borderBottom: '1px solid lightgray',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Companies</span>
            <h5>Top Solutions</h5>
          </div>

          <div
            style={{
              padding: '10px',
              borderBottom: '1px solid lightgray',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Support</span>
            <h5>Help</h5>
            <h5>Logout</h5>
          </div>

          <div
            style={{
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span
              style={{
                padding: '10px',
                display: 'flex',
                justifyContent: 'center',
                background: '#59caef',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              SWITCH TO RECRUITER MODE
            </span>
            <span
              style={{
                padding: '10px',
                display: 'flex',
                justifyContent: 'center',
                background: '#59caef',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
                marginTop: '10px',
              }}
            >
              SWITCH TO INVESTOR MODE
            </span>
          </div>

          <Menu.Divider />
        </div>
      </Menu.Item>
      {/* <Menu.Item>
        <strong>
          <FormattedMessage id="topBar.profileMenu.hello" />, {user.name || 'Anonymous'}
        </strong>
        <div>
          <strong className="mr-1">
            <FormattedMessage id="topBar.profileMenu.billingPlan" />:{' '}
          </strong>
          Professional
        </div>
        <div>
          <strong>
            <FormattedMessage id="topBar.profileMenu.role" />:{' '}
          </strong>
          {user.role || '—'}
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <div>
          <strong>
            <FormattedMessage id="topBar.profileMenu.email" />:{' '}
          </strong>
          {user.email || '—'}
          <br />
          <strong>
            <FormattedMessage id="topBar.profileMenu.phone" />:{' '}
          </strong>
          {user.phone || '—'}
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a
          href="#"
          onClick={e => {
            e.preventDefault()
            // history.push('/home')
          }}
        >
          <i className={`${styles.menuIcon} fe fe-user`} />
          <FormattedMessage id="topBar.profileMenu.editProfile" />
        </a>
      </Menu.Item>
      <Menu.Divider /> */}
    </Menu>
  )
  return (
    <Dropdown overlay={menu} trigger={['click']} onVisibleChange={addCount}>
      <div className={styles.dropdown}>
        <Avatar
          className={styles.avatar}
          shape="square"
          size="large"
          icon={<UserOutlined />}
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
        />
      </div>
    </Dropdown>
  )
}

export default connect(mapStateToProps)(ProfileMenu)
