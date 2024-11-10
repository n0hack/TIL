import CopyToClipboard from 'react-copy-to-clipboard';
import { Person, Wedding } from '../../models/wedding';
import { Accordion } from '../shared/Accordion';
import { Section } from '../shared/Section';
import styles from './Contact.module.scss';

type ContactProps = {
  groom: Wedding['groom'];
  bride: Wedding['bride'];
};

const Contact = ({ groom, bride }: ContactProps) => {
  return (
    <Section title="연락처 및 마음 전하실 곳">
      <Accordion label="신랑측">
        <ContactInfo
          name={groom.name}
          account={groom.account}
          phoneNumber={groom.phoneNumber}
        />
        <ContactInfo
          name={groom.parents[0].name}
          account={groom.parents[0].account}
          phoneNumber={groom.parents[0].phoneNumber}
        />
        <ContactInfo
          name={groom.parents[1].name}
          account={groom.parents[1].account}
          phoneNumber={groom.parents[1].phoneNumber}
        />
      </Accordion>
      <Accordion label="신부측">
        <ContactInfo
          name={bride.name}
          account={bride.account}
          phoneNumber={bride.phoneNumber}
        />
        <ContactInfo
          name={bride.parents[0].name}
          account={bride.parents[0].account}
          phoneNumber={bride.parents[0].phoneNumber}
        />
        <ContactInfo
          name={bride.parents[1].name}
          account={bride.parents[1].account}
          phoneNumber={bride.parents[1].phoneNumber}
        />
      </Accordion>
    </Section>
  );
};

const ContactInfo = ({ name, account, phoneNumber }: Person) => {
  return (
    <div className={styles.wrap_contact}>
      {/* 정보표현 */}
      <div className={styles.wrap_contact_info}>
        <span>{`${account.bankName} | ${account.accountNumber}`}</span>
        <span>{name}</span>
      </div>
      {/* 버튼들 */}
      <ul className={styles.wrap_buttons}>
        <li>
          <a className={styles.button} href={`tel:${phoneNumber}`}>
            전화
          </a>
        </li>
        <li>
          <CopyToClipboard
            text={`${account.bankName} ${account.accountNumber}`}
            onCopy={() => alert('복사가 완료되었습니다.')}
          >
            <button className={styles.button}>복사</button>
          </CopyToClipboard>
        </li>
        {account.kakaopayLink !== null ? (
          <li>
            <a
              className={styles.button}
              href={account.kakaopayLink}
              target="_blank"
            >
              송금
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export { Contact };
