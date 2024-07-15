import { useState } from "react";
import { MEMBERS } from "../assets/members";
import Modal from "../assets/Modal/Modal";
import styles from './team.module.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Team = ({ onClose }) => {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState('right');

    const Member = ({ name, role, image }) => {
        return (
            <div className={styles.member}>
                <img src={image} alt='member' />
                <h2>{name}</h2>
                <p>{role}</p>
            </div>
        );
    };

    const Legend = ({ index }) => {
        return (
            <div 
                className={`${styles.legend} ${index === active ? styles.activeLegend : ''}`} 
            />
        );
    };

    const handlePrev = () => {
        if (active > 0) {
            setDirection('left');
            setActive(prev => prev - 1);
        }
    };

    const handleNext = () => {
        if (active < MEMBERS.length - 1) {
            setDirection('right');
            setActive(prev => prev + 1);
        }
    };

    return (
        <Modal>
            <div className={styles.popup}>
                <div className={styles.header}>
                    <div className={styles.titleContainer}>
                        <h2>Meet the team</h2>
                    </div>
                    <div className={styles.closeContainer}>
                        <div onClick={onClose} className={styles.close}>
                            <h1>X</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.members}>
                    <TransitionGroup component={null}>
                        <CSSTransition
                            key={active}
                            timeout={300}
                            classNames={{
                                enter: direction === 'right' ? styles.slideRightEnter : styles.slideLeftEnter,
                                enterActive: direction === 'right' ? styles.slideRightEnterActive : styles.slideLeftEnterActive,
                                exit: direction === 'right' ? styles.slideLeftExit : styles.slideRightExit,
                                exitActive: direction === 'right' ? styles.slideLeftExitActive : styles.slideRightExitActive,
                            }}
                        >
                            <Member
                                name={MEMBERS[active].name}
                                role={MEMBERS[active].role}
                                image={MEMBERS[active].image}
                            />
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <div className={styles.controls}>
                    <div onClick={handlePrev} className={styles.slider}>
                        <p>{'<'}</p>
                    </div>
                    <div className={styles.legends}>
                        {MEMBERS.map((_, index) => (
                            <Legend key={index} index={index} />
                        ))}
                    </div>
                    <div onClick={handleNext} className={styles.slider}>
                        <p>{'>'}</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default Team;