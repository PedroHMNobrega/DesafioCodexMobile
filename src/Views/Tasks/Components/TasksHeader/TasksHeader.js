import React from 'react';
import {Text, View} from 'react-native';
import style from './style.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {logout} from '../../../../services/authentication.js';
import {useNavigation} from '@react-navigation/native';

const TasksHeader = () => {
  const navigator = useNavigation();

  async function handleLogout() {
    await logout();
    navigator.replace('Login');
  }

  return (
    <View style={style.container}>
      <Text style={style.logo}>Taskomp</Text>
      <TouchableOpacity onPress={handleLogout}>
        <View style={style.logoutButton}>
          <Text style={style.logoutText}>Sair</Text>
          <FontAwesomeIcon
            icon={faSignOutAlt}
            style={style.logoutIcon}
            size={30}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TasksHeader;
