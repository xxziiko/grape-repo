import { memo } from 'react';
import * as stylex from '@stylexjs/stylex';
import { Link, useNavigate } from '@tanstack/react-router';
import { signOutUser } from '@/entities/auth';
import { flexStyles } from '@/shared';

const MENU = ['비밀번호 변경하기', '닉네임 변경하기'] as const;
const ROUTES = [
  '/settings/password-settings',
  '/settings/profile-setup',
  // '/settings/delete-account',
] as const;

const Settings = () => {
  const navigation = useNavigate();

  const handleSignOut = () => {
    signOutUser().then(() => navigation({ to: '/' }));
  };

  return (
    <main>
      <ul>
        {MENU.map((list, index) => (
          <li key={list}>
            <Link
              {...stylex.props(flexStyles.alignCenter, styles.list)}
              to={ROUTES[index]}
            >
              <p {...stylex.props(styles.text)}>{list}</p>
            </Link>
          </li>
        ))}

        <li
          {...stylex.props(flexStyles.alignCenter, styles.list)}
          onClick={handleSignOut}
        >
          <p {...stylex.props(styles.text)}>로그아웃</p>
        </li>
      </ul>
    </main>
  );
};

export default memo(Settings);

const styles = stylex.create({
  list: {
    padding: '30px 0',
    width: '100%',
    borderBottom: '1px solid #dedede',
    cursor: 'pointer',
  },

  text: {
    padding: '0 15px',
    fontSize: '14px',
    fontWeight: 500,
  },
});
