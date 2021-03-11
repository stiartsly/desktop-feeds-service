import React from 'react';
import styles from './SignIn.scss';
import icon from '../../../assets/feeds-logo.svg';
import logo from '../../../assets/logos/ic_elastos.png';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faQrcode,
  faLink,
  faPlug,
} from '@fortawesome/free-solid-svg-icons';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import DialogQR from '../DialogQR/DialogQR';
import ConnectButton from '../ConnectButton/ConnectButton';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Translation } from 'react-i18next';

const SignIn = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Helmet>
        {/* <style type="text/css">
          {`
        body {
          background: linear-gradient(-45deg, #ee7752, #7624fe, #23a6d5, #368bff);
          background-size: 400% 400%;
          animation: gradient 30s ease infinite;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
            `}
        </style> */}
        <style>
          {`
        body {
          background-image: linear-gradient( 180deg,  rgba(26,33,64,1) 10.9%, rgba(81,84,115,1) 87.1% );
        }
            `}
        </style>
      </Helmet>
      <div className={styles.mainContainer}>
        <div className={styles.welcome}>
          <Grid
            container
            direction="column"
            justify="center"
            alignContent="center"
          >
            <img width="200px" alt="icon" src={icon} />
            <h1>{t('title')}</h1>
          </Grid>
        </div>

        <div className={styles.glassContainer}>
          <div className={styles.cover}>
            <h3 className={styles.userLogin}>
              <FontAwesomeIcon icon={faUserCircle} className="icon" />
              {t('description.publisher')}
            </h3>

            <div className={styles.welcome}>
              <DialogQR title={t('description.dialogtitle')}>
                {t('button.link')}
              </DialogQR>

              <ConnectButton con={t('button.con')} dis={t('button.dis')} />
            </div>
          </div>
        </div>

        <Grid
          container
          direction="row"
          justify="space-between"
          className={styles.footer}
        >
          <h5>
            {t('description.power')}
            <img
              width="15px"
              alt="logo"
              src={logo}
              className={styles.elastosLogo}
            />
          </h5>
          <a
            href="https://github.com/elastos-trinity/feeds-service/releases"
            target="_blank"
          >
            <h5 className={styles.version}>v1.5.2</h5>
          </a>
        </Grid>
      </div>
    </div>
  );
};

export default SignIn;
