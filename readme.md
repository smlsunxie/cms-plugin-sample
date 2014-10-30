# cms-plugin-sample

this project is [mobius-cms's](https://github.com/smlsunxie/mobius-cms) sample plugin.
mobius-cms's is a plugin base framework.

this project demonstrate that plugin can install on mobius-cms. besides, also can perform independent.

for development, in order to develop convenience, we don't install the plugin every time.

## how to start develop a mobius-cms plugin

### install docker and fig

only the first time need to install docker and fig.

you can find the installation from [docker](https://www.docker.com/) and [fig](http://www.fig.sh/).

### start mobius-cms environment

execute command ``fig up mobius``, it will start mobius-cms and mount the plugin's action and model.

the action and models definition is in ``./config/actions.coffee`` and ``./config/models.coffee``.

### start test plugin

after start mobius-cms, we can start plugin by execute command: ``gulp watch``.

than the plugin will has front end and back end function.

work like below image:
