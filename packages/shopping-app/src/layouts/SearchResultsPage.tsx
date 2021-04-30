import React from 'react';
import './SearchResultsPage.css';

export interface Props {
    facets: () => React.ReactElement<any>,
    sponsored: () => React.ReactElement<any>,
    layoutSwitcher: () => React.ReactElement<any>,
    results: () => React.ReactElement<any>
};

export default ({facets, sponsored, layoutSwitcher, results }: Props) => {
    return (
        <div className="search-results">
            <section className="facets">{facets()}</section>
            <section className="sponsored">{sponsored()}</section>
            <section className="layout-switcher">{layoutSwitcher()}</section>
            <section className="results">{results()}</section>
        </div>
    );
}