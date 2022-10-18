import React, { useState, useEffect } from "react";
import CompositeProvider from "./providers/composite/composite.providers";
import { choiceList } from "./lib/constants";
import { choiceTypes, resultTypes } from "./lib/types";
import { Picked } from "./components/modules/picked/picked.modules";
import { Modal } from "./components/modules/modal/modal.modules";
import { ButtonCircle } from "./components/elements/button-circle/button-circle.elements";
import {
    StyledPage,
    StyledContainer,
    StyledScoreWrapp,
    StyledScoreList,
    StyledScore,
    StyledScoreText,
    StyledScoreNumber,
    StyledButtonChoice,
    StyledLogo,
    StyledRulesButton,
    StyledRulesImage,
} from "./styled";

export const App = () => {
    const [score, setScore] = useState({
        user: 0,
        bot: 0,
    });
    const [picked, setPicked] = useState({
        user: choiceTypes.EMPTY,
        bot: choiceTypes.EMPTY,
    });
    const [isModal, setIsModal] = useState({
        rules: false,
        history: false,
    });
    const [choice, setChoice] = useState<boolean>(true);
    const [result, setResult] = useState<resultTypes>(resultTypes.EMPTY);

    const randomNum = (
        min:number,
        max:number,
    ) => {
        const rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    const hadlerClickButton = (type: choiceTypes) => {
        setPicked({
            user: type,
            bot: choiceList[randomNum(0, choiceList.length-1)],
        });
        setChoice(false);
    };
    const hadlerClickResult = () => setChoice(true);
    const hadlerChoice = (result: resultTypes) => {
        switch(result) {
            case resultTypes.WINS: {
                setScore((prev) => ({
                    ...prev,
                    user: ++score.user,
                }));
                break;
            }
            case resultTypes.LOSE: {
                setScore((prev) => ({
                    ...prev,
                    bot: ++prev.bot,
                }));
                break;
            }
        }
    };

    useEffect(() => {
        const x = choiceList.indexOf(picked.user);
        const y = choiceList.indexOf(picked.bot);
        const mod = (a:number, b:number) => {
            const c = a % b
            return (c < 0) ? c + b : c
        }
        switch(true) {
            case (x === y): {
                setResult(resultTypes.DRAW);
                break;
            };
            case((mod((x - y), choiceList.length) < choiceList.length / 2)): {
                setResult(resultTypes.WINS);
                break;
            }
            default: setResult(resultTypes.LOSE);
        }
    }, [picked]);

    return (
        <CompositeProvider>
            <StyledPage>
                <StyledContainer>
                    <StyledScoreWrapp>
                        <StyledLogo src={require(`@assets/img/logo.svg`)} alt="logo" />
                        <StyledScoreList>
                            <StyledScore>
                                <StyledScoreText>score</StyledScoreText>
                                <StyledScoreNumber>{score.user}</StyledScoreNumber>
                            </StyledScore>
                            <StyledScore>
                                <StyledScoreText>bot score</StyledScoreText>
                                <StyledScoreNumber>{score.bot}</StyledScoreNumber>
                            </StyledScore>
                        </StyledScoreList>
                    </StyledScoreWrapp>
                    {
                        choice
                            ?
                                <StyledButtonChoice>
                                    {choiceList.map((item) => <ButtonCircle onClick={hadlerClickButton} type={item}/>)}
                                </StyledButtonChoice>
                            :
                                <Picked
                                    type={picked.user}
                                    picked={picked.bot}
                                    result={result}
                                    onResult={hadlerClickResult}
                                    onScore={hadlerChoice}
                                />
                    }
                    <StyledRulesButton 
                        onClick={() => setIsModal((prev) => ({
                            ...prev,
                            rules: !prev.rules,
                        }))
                    }>
                        Rules
                    </StyledRulesButton>
                </StyledContainer>

                <Modal
                    isVisible={isModal.rules}
                    onCancel={() => setIsModal((prev) => ({
                        ...prev,
                        rules: !prev.rules,
                    }))}
                    content={
                        <>
                            <StyledRulesImage
                                src={require("@assets/img/image-rules.svg")}
                                alt="rules"
                            />
                        </>
                    }
                />
            </StyledPage>
        </CompositeProvider>
    );
};
