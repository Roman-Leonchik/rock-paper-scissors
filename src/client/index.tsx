import React, { useState, useEffect } from "react";
import CompositeProvider from "./providers/composite/composite.providers";
import { choiceList } from "./lib/constants";
import { choiceTypes, resultTypes } from "./lib/types";
import { Picked } from "./components/modules/picked/picked.modules";
import { Modal } from "./components/modules/modal/modal.modules";
import { ButtonCircle } from "./components/elements/button-circle/button-circle.elements";
import { HistoryItem, IHistory } from "./components/elements/history-item/history-item.elements";
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
    StyledButtonItem,
    StyledRulesImage,
    StyledButtonWrapp,
    StyledHistoryList,
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
    const [result, setResult] = useState({
        type: resultTypes.EMPTY,
        round: 0,
    });
    const [history, setHistory] = useState<IHistory[]>([]);

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

        if(picked.user === choiceTypes.EMPTY || picked.bot === choiceTypes.EMPTY) return
        setResult((prev) => ({
            ...prev,
            round: ++prev.round,
        }));
        switch(true) {
            case (x === y): {
                setResult((prev) => ({
                    ...prev,
                    type: resultTypes.DRAW,
                }));
                break;
            };
            case((mod((x - y), choiceList.length) < choiceList.length / 2)): {
                setResult((prev) => ({
                    ...prev,
                    type: resultTypes.WINS,
                }));
                break;
            }
            default: setResult((prev) => ({
                ...prev,
                type: resultTypes.LOSE,
            }));
        }
    }, [picked]);

    useEffect(() => {
        if (result.type === resultTypes.EMPTY) return
        console.log(result.type)
        const historyItem: IHistory = {
            result: result.type,
            user: picked.user,
            bot: picked.bot,
            index: result.round,
        }
        setHistory((prev) => [...prev, historyItem]);
    }, [result]);

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
                                    {choiceList.map((item) => <ButtonCircle onClick={hadlerClickButton} type={item} key={item}/>)}
                                </StyledButtonChoice>
                            :
                                <Picked
                                    type={picked.user}
                                    picked={picked.bot}
                                    result={result.type}
                                    onResult={hadlerClickResult}
                                    onScore={hadlerChoice}
                                />
                    }
                    <StyledButtonWrapp>
                        <StyledButtonItem
                            onClick={() => setIsModal((prev) => ({
                                ...prev,
                                history: !prev.history,
                            }))
                        }>
                            History
                        </StyledButtonItem>
                        <StyledButtonItem 
                            onClick={() => setIsModal((prev) => ({
                                ...prev,
                                rules: !prev.rules,
                            }))
                        }>
                            Rules
                        </StyledButtonItem>
                    </StyledButtonWrapp>
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
                <Modal
                    isVisible={isModal.history}
                    onCancel={() => setIsModal((prev) => ({
                        ...prev,
                        history: !prev.history,
                    }))}
                    header="History"
                    content={
                        <StyledHistoryList>
                            {history.map((item) => (
                                <HistoryItem
                                    key={`${item.user}-${item.bot}-${item.index}`}
                                    result={item.result}
                                    user={item.user}
                                    bot={item.bot}
                                    index={item.index}
                                />
                            ))}
                        </StyledHistoryList>
                    }
                />
            </StyledPage>
        </CompositeProvider>
    );
};
