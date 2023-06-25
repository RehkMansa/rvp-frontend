import { useEffect, useRef } from 'react';

/**
 * Runs an effect only once
 *
 * 	Why? When application is deployed as a build, React would not run effects twice, vs when deployed as a node app
 * @see https://www.youtube.com/watch?v=81faZzp18NM */
const useSingleEffect = (effect: () => void, dependencies: unknown[]) => {
	const hasMountedRef = useRef(true);

	useEffect(() => {
		if (hasMountedRef.current) {
			effect();
		}

		return () => {
			hasMountedRef.current = false;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, dependencies);
};

export default useSingleEffect;
