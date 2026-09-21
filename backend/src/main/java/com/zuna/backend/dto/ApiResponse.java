package com.zuna.backend.dto;

/**
 * Generic API response wrapper for consistent JSON shape:
 * <pre>
 * {
 *   "success": true,
 *   "message": "...",
 *   "data": { ... }
 * }
 * </pre>
 */
public record ApiResponse<T>(
    boolean success,
    String message,
    T data
) {
    /** Convenience factory for successful responses with data. */
    public static <T> ApiResponse<T> ok(String message, T data) {
        return new ApiResponse<>(true, message, data);
    }

    /** Convenience factory for successful responses without data. */
    public static <T> ApiResponse<T> ok(String message) {
        return new ApiResponse<>(true, message, null);
    }

    /** Convenience factory for error responses. */
    public static <T> ApiResponse<T> error(String message) {
        return new ApiResponse<>(false, message, null);
    }
}
