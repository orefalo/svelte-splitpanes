module.exports = {
	extends: ['./node_modules/commitlint-config-gitmoji'],
	rules: {
		'header-max-length': [0, 'always', 100],
		'scope-case': [0, 'always', 'pascal-case']
	}
};
