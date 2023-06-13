<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->integer('category_id')->default(0);
            $table->integer('brand_id')->default(0);
            $table->integer('status')->default(0);
            $table->float('price',255,2);
            $table->float('sell_price',255,2)->nullable();
            $table->integer('quantity')->nullable();
            $table->string('product_sku')->unique();
            $table->text('description')->nullable();
            $table->string('product_image')->nullable();
            $table->string('meta_title')->nullable();
            $table->text('meta_keywords')->nullable();
            $table->text('meta_description')->nullable();
            $table->integer('added_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
