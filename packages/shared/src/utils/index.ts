import { formatEther, parseEther, isAddress } from 'viem';
import { MATH_CONSTANTS, TIME_CONSTANTS } from '../constants';

// Address utilities
export const formatAddress = (address: string, chars = 4): string => {
  if (!address || !isAddress(address)) return '';
  return `${address.substring(0, 2 + chars)}...${address.substring(
    42 - chars
  )}`;
};

export const isValidAddress = (address: string): boolean => {
  return isAddress(address);
};

// Token amount utilities
export const formatTokenAmount = (
  amount: bigint,
  decimals = 18,
  maxDecimals = 4
): string => {
  const formatted = formatEther(amount, 'wei');
  const parts = formatted.split('.');
  
  if (parts.length === 1) return parts[0];
  
  const decimalPart = parts[1].slice(0, maxDecimals);
  return `${parts[0]}.${decimalPart}`;
};

export const parseTokenAmount = (amount: string, decimals = 18): bigint => {
  try {
    return parseEther(amount, 'wei');
  } catch {
    return BigInt(0);
  }
};

// Percentage utilities
export const formatPercentage = (
  value: number,
  decimals = 2,
  suffix = '%'
): string => {
  return `${value.toFixed(decimals)}${suffix}`;
};

export const basisPointsToPercentage = (basisPoints: number): number => {
  return basisPoints / MATH_CONSTANTS.BASIS_POINTS * MATH_CONSTANTS.PERCENTAGE;
};

export const percentageToBasisPoints = (percentage: number): number => {
  return Math.round(percentage * MATH_CONSTANTS.BASIS_POINTS / MATH_CONSTANTS.PERCENTAGE);
};

// Time utilities
export const formatDuration = (seconds: number): string => {
  const days = Math.floor(seconds / TIME_CONSTANTS.DAY);
  const hours = Math.floor((seconds % TIME_CONSTANTS.DAY) / TIME_CONSTANTS.HOUR);
  const minutes = Math.floor((seconds % TIME_CONSTANTS.HOUR) / TIME_CONSTANTS.MINUTE);
  
  if (days > 0) {
    return `${days}d ${hours}h`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};

export const formatTimestamp = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getTimeUntil = (futureTimestamp: number): string => {
  const now = Math.floor(Date.now() / 1000);
  const diff = futureTimestamp - now;
  
  if (diff <= 0) return 'Expired';
  
  return formatDuration(diff);
};

// Math utilities
export const calculateAPY = (
  amount: bigint,
  duration: number,
  rate: number
): bigint => {
  const annualMultiplier = BigInt(TIME_CONSTANTS.YEAR) / BigInt(duration);
  const rateMultiplier = BigInt(rate) / BigInt(MATH_CONSTANTS.BASIS_POINTS);
  
  return (amount * rateMultiplier * annualMultiplier) / BigInt(100);
};

export const calculateStakingRewards = (
  stakedAmount: bigint,
  lockPeriod: number,
  baseAPY: number,
  multiplier: number
): bigint => {
  const adjustedAPY = (baseAPY * multiplier) / 100;
  const annualReward = (stakedAmount * BigInt(adjustedAPY)) / BigInt(MATH_CONSTANTS.BASIS_POINTS);
  const periodReward = (annualReward * BigInt(lockPeriod)) / BigInt(TIME_CONSTANTS.YEAR);
  
  return periodReward;
};

// Validation utilities
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Array utilities
export const chunk = <T>(array: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  );
};

export const unique = <T>(array: T[]): T[] => {
  return [...new Set(array)];
};

// Object utilities
export const omit = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> => {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result;
};

export const pick = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> => {
  const result = {} as Pick<T, K>;
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
};

// Error utilities
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'An unknown error occurred';
};

// Async utilities
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const retry = async <T>(
  fn: () => Promise<T>,
  maxAttempts = 3,
  delayMs = 1000
): Promise<T> => {
  let lastError: Error;
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      
      if (attempt === maxAttempts) {
        throw lastError;
      }
      
      await delay(delayMs * attempt);
    }
  }
  
  throw lastError!;
};

// Debounce utility
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void => {
  let inThrottle = false;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};