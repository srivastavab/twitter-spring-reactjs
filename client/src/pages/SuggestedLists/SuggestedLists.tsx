import React, {FC, ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Paper, Typography} from "@material-ui/core";

import {useSuggestedListsStyles} from "./SuggestedListsStyles";
import {BackButton} from "../../components/BackButton/BackButton";
import {fetchLists} from "../../store/ducks/lists/actionCreators";
import {selectListsItems} from "../../store/ducks/lists/selectors";
import ListsItem from "../Lists/ListsItem/ListsItem";

const SuggestedLists: FC = (): ReactElement => {
    const classes = useSuggestedListsStyles();
    const dispatch = useDispatch();
    const lists = useSelector(selectListsItems);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchLists());
    }, []);

    return (
        <Paper className={classes.container} variant="outlined">
            <Paper className={classes.header} variant="outlined">
                <BackButton/>
                <div>
                    <Typography variant="h6">Suggested Lists</Typography>
                </div>
            </Paper>
            <Paper className={classes.content} variant="outlined">
                <img
                    className={classes.contentImage}
                    src="https://ton.twimg.com/onboarding/channels/discovery-v2.png"
                    alt="contentImage"
                />
                <div className={classes.infoWrapper}>
                    <div className={classes.infoTitle}>
                        Choose your Lists
                    </div>
                    <div className={classes.infoText}>
                        When you follow a List, you'll be able to quickly keep up with the experts on what you care
                        about most.
                    </div>
                </div>
            </Paper>
            <div className={classes.listsTitle}>Discover new Lists</div>
            {lists.map((list) => <ListsItem key={list.id} list={list}/>)}
        </Paper>
    );
};

export default SuggestedLists;
