require('./style.css');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),

    getInitialState: function(input, out) {
        return {
            clickCount: input.clickCount || 0
        };
    },
    getTemplateData: function(state, input) {
        return {
            clickCount: state.clickCount
        };
    },
    handleButtonClick: function() {
        this.setState('clickCount', this.state.clickCount + 1);
    }
});