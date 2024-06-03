# Programming Patterns
## Separate Container Components from Presentational Components
If a component has to have state, make calculations based on propsm or manage any other complex logic,
then that component shouldn't also have to render JSX.

To reduce component complexity, break it down into multiple simpler components.

Stateful (container) components handlwe complex state or logic and stateless (presentational) components
handle rendering JSX.

You can split these different component types into folders (Example `components` and `containers`).

Presentational or `stateless` components will be exported and will not render themselves, as they will be
rendered by a container component.