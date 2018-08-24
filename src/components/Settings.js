import React from "react";
import { Text, View, Modal, Switch, Picker } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, CardSection } from "./common";
import { settingsUpdate } from "../actions/";

const Settings = (props) => {
  const {
    containerStyle,
    textStyle,
    cardSectionStyle,
    labelStyle
  } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>Settings</Text>
        </CardSection>

        <CardSection>
          <Text style={labelStyle}>Size</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={"3".toString()}
            // onValueChange={value =>
            //   settingsUpdate({
            //     prop: "timeInterval",
            //     value: parseInt(value)
            //   })
            // }
          >
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
          </Picker>
        </CardSection>

        <CardSection>
          <Text style={labelStyle}>Difficulty</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={"1".toString()}
            onValueChange={}
          >
            <Picker.Item label="Easy" value="1" />
            <Picker.Item label="Medium" value="2" />
            <Picker.Item label="Hard" value="3" />
          </Picker>
        </CardSection>

      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: "center"
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.50)",
    position: "relative",
    flex: 1,
    justifyContent: "center"
  },
  labelStyle: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 1
  }
};

// const mapStateToProps = state => {
//   const {
//     timeInterval,
//     playMetronome,
//     playKey,
//     delayPlayKey,
//     showVoicing,
//     showFingerPattern,
//     showStringNumber
//   } = state.settings;
//   return {
//     timeInterval,
//     playMetronome,
//     playKey,
//     delayPlayKey,
//     showVoicing,
//     showFingerPattern,
//     showStringNumber
//   };
// };

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ settingsUpdate }, dispatch);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Settings);

export default Settings