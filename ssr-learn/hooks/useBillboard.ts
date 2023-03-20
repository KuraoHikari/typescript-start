import useSwr from 'swr';
import fetcher from '@/lib/fetcher';

const useBillboard = () => {
  // useswr option , read the doc for more information about this
  // revalidateIfStale: false,
  // revalidateOnFocus: false,
  // revalidateOnReconnect: false,
  const { data, error, isLoading } = useSwr('/api/random', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
  };
};

export default useBillboard;
