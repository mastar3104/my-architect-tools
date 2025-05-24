import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'; // このコンポーネント専用のCSS

const FeatureList = [
    // {
    //     title: '体系的なナレッジベース',
    //     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    //     description: (
    //         <>
    //             アーキテクトとして培ってきた知識や経験を、カテゴリ別に整理して蓄積しています。
    //             設計パターン、クラウドサービス、言語ごとのベストプラクティスなど。
    //         </>
    //     ),
    // },
    // {
    //     title: '日々の学習ログ',
    //     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    //     description: (
    //         <>
    //             新しく学んだこと、試したこと、直面した課題の解決方法などをブログ形式で記録しています。
    //             未来の自分への備忘録。
    //         </>
    //     ),
    // },
    // {
    //     title: '技術選定の考察',
    //     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    //     description: (
    //         <>
    //             特定の技術やツールを選定する際の思考プロセスや、過去の経験から得られた知見をまとめています。
    //             なぜそれを選んだのか、何が課題だったのか。
    //         </>
    //     ),
    // },
    {
        title: 'いつまでも工事中',
        Svg: require('@site/static/img/kani2.svg').default,
        description: (
            <>
                自分が日々アーキテクトとして働く上で利用するツールや考え方の整理場所<br/>
                どのような設計が最適か、どのような課題があるか...
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
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