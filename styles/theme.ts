// Sizing guide is based on greek alphabet
// From largest unit to smallest:
// alpha
// beta
// gamma
// delta
// epsilon
// zeta
// eta
// theta
// iota

// omega = different from other
// psi = different from other

const theme = {
    font: {
        size: {
            alpha: '3em',       // 48px
            beta: '1.5em',      // 24px
            gamma: '0.75em',    // 12px
            delta: '0.625em',   // 10px
            epsilon: '0.5em',   // 8px
        },
        weight: {
            alpha: '500',
            beta: '400'
        }
    },
    color: {
        // color order is from darkest to lightest
        alpha: '#2E2623',
        beta: '#50433D',
        gamma: '#7F6F68',
        delta: '#A49792',
        epsilon: '#D1C9C7',
        zeta: '#EBE7E5',
        eta: '#F3F2F1',
        omega: '#16C784',   // green
        psi: '#EA3943'      // red
    },
    space: {
        alpha: '4em',
        beta: '3em',
        gamma: '2em',
        delta: '1.5em',
        epsilon: '1em',
        zeta: '0.75em',
        eta: '0.5em',
        theta: '0.25em',
        iota: '0.125em'
    },
    breakpoint: {
        alpha: '1920px',
        beta: '1440px',
        gamma: '1200px',
        delta: '1024px',
        epsilon: '768px ',
        zeta: '600px',
        eta: '480px',
    }
}



declare module 'styled-components' {
    type Theme = typeof theme;
    export interface DefaultTheme extends Theme {}
}

export default theme;