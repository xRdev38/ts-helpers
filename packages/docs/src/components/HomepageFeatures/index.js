import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Configuration et outils',
    Svg: require('@site/static/img/elements.svg').default,
    description: (
      <>
        Bibliothéques avec différentes configuration pour les outils front les plus
          utilisés, <strong>eslint, prettier</strong>, etc...
      </>
    ),
  },
  {
    title: 'Partage de code',
    Svg: require('@site/static/img/team.svg').default,
    description: (
      <>
        Partage de code et de configurations pour différents projets. Utilisable pour la team et les développeurs.
      </>
    ),
  },
  {
    title: 'Fonctions et partage de code',
    Svg: require('@site/static/img/functions.svg').default,
    description: (
      <>
        Utilisation des fonctions avec helpers et types avec <strong>Typescript</strong> pour des projets.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
