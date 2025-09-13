export const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            repeatType: 'reverse'
        }
    },
    viewport: { margin: '0px 0px -100px 0px' }
}

export const childVariant = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.25,
            repeatType: 'reverse'
        }
    }
}

export const fadeVariants = {
    hidden: {
        /*opacity: 0,*/
        pointerEvents: 'none'
    },
    visible: {
        opacity: 1,
        pointerEvents: 'auto'
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.1 }
    }
}
