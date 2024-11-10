import { useEffect, useRef } from 'react';
import { Location } from '../../models/wedding';
import { Section } from '../shared/Section';
import styles from './Map.module.scss';

declare global {
  interface Window {
    kakao: any;
  }
}

type MapProps = {
  location: Location;
};

const Map = ({ location }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 비동기로 스크립트 불러오기(렌더링 방해 x)
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`;
    script.async = true;

    document.head.appendChild(script);

    // 카카오가 로드된 이후에 실행
    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        );
        const options = {
          center: position,
          level: 3,
        };

        const marker = new window.kakao.maps.Marker({
          position,
        });

        const map = new window.kakao.maps.Map(mapContainer.current, options);
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <Section
      title={
        <div className={styles.wrap_header}>
          <span className={styles.txt_title}>오시는 길</span>
          <span className={styles.txt_subtitle}>{location.name}</span>
          <span className={styles.txt_subtitle}>{location.address}</span>
        </div>
      }
    >
      <div className={styles.wrap_map}>
        <div className={styles.map} ref={mapContainer}></div>
        <a className={styles.btn_find_way} href={location.link} target="_blank">
          길찾기
        </a>
      </div>

      <div>
        <WayToCome label={'버스'} list={location.waytocome.bus} />
        <WayToCome label={'지하철'} list={location.waytocome.metro} />
      </div>
    </Section>
  );
};

const WayToCome = ({
  label,
  list,
}: {
  label: React.ReactNode;
  list: string[];
}) => {
  return (
    <div className={styles.wrap_waytocome}>
      <div className={styles.txt_label}>{label}</div>
      <ul>
        {list.map((waytocome) => (
          <li>{waytocome}</li>
        ))}
      </ul>
    </div>
  );
};

export { Map };
