import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug, faSlash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const styles = {
  connected: 'connected',
  disconnected: 'disconnected',
};

let cx = classNames.bind(styles);

export default function ConnectButton({ con, dis }) {
  const { t, i18n } = useTranslation();

  const [connect, setConnect] = React.useState(true);

  const handleClick = () => {
    setConnect(!connect);
  };

  let buttonConnect = cx({
    connected: true,
  });

  let buttonDisconnect = cx({
    disconnected: true,
  });

  return (
    <button
      type="button"
      className={connect ? buttonConnect : buttonDisconnect}
      onClick={handleClick}
    >
      {connect ? (
        <FontAwesomeIcon icon={faPlug} className="icon" />
      ) : (
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faPlug} className="icon" />
          <FontAwesomeIcon icon={faSlash} className="icon" />
        </span>
      )}
      {connect ? con : dis}
    </button>
  );
}
