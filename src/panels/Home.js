import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

const Home = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader>Goodly Base</PanelHeader>

		<Group title="Войдите под своей учетной записью">
            <Div>
                <Button size="xl" level="2" onClick={go} data-to="auth">
                    Войти
                </Button>
            </Div>
            <Div>
                <Button size="xl" level="2" onClick={go} data-to="signup">
                    Регистрация
                </Button>
            </Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
